/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Graphics plug-ins", "_gfx_plugins.html", [
      [ "Creating a custom node", "_gfx_plugins.html#CustomNode", null ],
      [ "Shader conventions", "_gfx_plugins.html#ShaderConventions", null ],
      [ "Video decoders", "_gfx_plugins.html#VideoDecoders", null ]
    ] ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_change_element_name_8hpp_source.html",
"_expand_mode_8hpp_source.html",
"_midi_process_metadata_8hpp_source.html",
"_remove_slot_from_rack_8hpp_source.html",
"_unit_8hpp_source.html",
"class_automation_1_1_process_model.html#a85e48ce22117f89e27b7d7c81ab08364",
"class_curve_1_1_easing_segment.html#a8014f05668cc74e02bf3a5798adba227",
"class_curve_1_1_set_segment_tool.html#a1b6b1330b7de0c48d80a065e5e71887c",
"class_data_stream_writer.html#a09b0cc912a2b050291f41ad96cbabba6",
"class_dataflow_1_1_min_max_float_outlet_item.html#ad7e2d6055444c2d075a39fb85d6221c5",
"class_equality_test.html#a6982ec33cf1e7b18820aee1bc0a9a131",
"class_execution_1_1_sound_component.html#a0f601a52de23619866f6a67de950b9d2",
"class_explorer_1_1_device_document_plugin.html#aaf5d93494042b6c6dc6568325cf0f793",
"class_factor_oracle2_m_i_d_i_1_1_single_transition.html#a0d3e61735d67c877040920bc5cb204a8",
"class_gfx_1_1_video_1_1_model.html#aad58f2326f6ea4e7e5fa4c26e114155d",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_01std_1_1is__base__of_3_fa82f8e34463791cc3719bf96cdfa1aa.html#a98febf943a2b671be9f6ff7caeccc9ee",
"class_j_s_o_n_reader.html#a27abe9e1b3fb091a6cb635cfdf455cc6",
"class_j_s_o_n_writer.html#abb9760e348e4bfba6cfb87e1cf3b7a78",
"class_local_tree_1_1_time_sync.html",
"class_midi_1_1_add_note.html#a221b9b4c2e763ec91a3f17c085eaec01",
"class_nodal_1_1_nodal_executor.html#aca4e11e6c8befc25ad79ae180a93b8f3",
"class_pd_1_1_process_model.html",
"class_process_1_1_effect_process_factory___t.html#ae33cecfc594bb9a0a283599378c2ece9",
"class_process_1_1_outlet.html#aadc335881081f353496bd42ff6d0a4e9",
"class_protocols_1_1_artnet_device.html#af7cd92191628ba011899d8da7492f828",
"class_recording_1_1_application_plugin.html#a47018781f710ba5f2a761bf1a3ccc760",
"class_scenario_1_1_clickable_label_item.html#a986da3322b40719fa55e3df83c24452d",
"class_scenario_1_1_command_1_1_merge_time_syncs.html#af936c8e8d8ebcb5858ce738b91741fd7",
"class_scenario_1_1_comment_block_presenter.html#a6f9bcf612e34dc4ec6dffc428cb4b113",
"class_scenario_1_1_event_model.html#ac94a9aa10bed9f65690291c91ed139b5",
"class_scenario_1_1_interval_model.html#a2c66e9baf53179dfa405b6e53cee0e2c",
"class_scenario_1_1_layer_data.html#ad8516c309e43281fd97b28a56004771a",
"class_scenario_1_1_play_tool_state.html#ae470f0a42bf0a000d13ab597709c71dd",
"class_scenario_1_1_scenario_presenter.html#a6e398055a9ce586a54bc749f8318cbd8",
"class_scenario_1_1_state_model.html#addf051b647ad0296e87aa4e109fbbca5",
"class_scenario_1_1_tool_palette.html#a4ab7edbf17a4945f7e67142f4345626e",
"class_spline_1_1_generator_dialog.html#ac0f29b1095d1e3b600011e56695fda8d",
"class_transport_1_1_document_plugin.html#a40e99888b5e40343e052de01b75dd0e1",
"class_video_1_1_video_decoder.html#acdd5869f0fd377dca84c2f252869e705",
"classscore_1_1_command_stack.html#a56e6c490a59759858561a7da06f8d43a",
"classscore_1_1_entity_list.html#af750aeb36a32fe7f32c85bb63d18be09",
"classscore_1_1_log_messages_item_model.html#a63cdbb29024dc69caade1f7bc06b3f06",
"classscore_1_1_q_graphics_int_slider.html#abf598224c00e566c692b24a04794de92",
"classscore_1_1_settings_command_base.html#aa6f23b1938bd3dec14f0b86f2e915ddd",
"classscore_1_1_version.html#a8a32b3e5e73fd343275ff6897448939c",
"classscore__plugin__engine.html",
"classvst3_1_1vst__node__base.html#a2030c56df4ea49d047c339a9a73dcf1b",
"namespacemembers_type.html",
"struct_boost_variant2_data_stream_deserializer.html#a4aee99eb327ad1ca461878bf0af75b05",
"struct_control_1_1_toggle.html#adb6679634ac28baa2dc2db18bc5396f0",
"struct_device_1_1_address_settings_common.html#a5ac5f1a23adf8b6e50cfaeaa3b49d4fc",
"struct_faust_1_1_u_i.html#a1f3b161b727d3cc073da7902634d24b0",
"struct_j_s_o_n_reader_1_1assigner.html#a8634a3808e45b239e98a69cbb8a1b142",
"struct_l_v2_1_1on__start.html",
"struct_media_1_1_sound_1_1_waveform_computer_impl_1_1_size_infos.html#afd0ec0e9880667a9e70eed25e16de3d8",
"struct_nodes_1_1_math_audio_generator_1_1_node.html",
"struct_process_1_1_pixmaps.html#a5b3ecb9d5a9121c62cba51fba2717c86",
"struct_q_meta_type_id_3_01_audio_1_1_settings_1_1_external_transport_01_4.html#a9fb0eb1836e5718c8b9c62daf0836158a0695457de9a6e17ec9b6ec05f15dd4db",
"struct_recording_1_1_record_context.html",
"struct_scenario_1_1_encaps_data.html",
"struct_scenario_1_1get__start__end.html#ac1f9a44dcf8aa1067f68ef0d09ed4f48",
"struct_t_serializer_3_01_j_s_o_n_object_00_01_id_container_3_01_t_00_01_u_00_01_v_01_4_01_4.html",
"structbase__kind_3_01_t_00_01std_1_1enable__if__t_3_9std_1_1is__same__v_3_01_t_00_01typename_01_t_1_1base__type_01_4_01_4_01_4.html",
"structscore_1_1_document_context.html#acbf184953c3798743dc6e20e294c0b98",
"structscore_1_1_slider_wrapper.html#ab2fc19395a953e05a7756665e1e9df56",
"structscore_1_1gfx_1_1_edge.html#ad59b7d92b85622a706901dff225097ff",
"structscore_1_1gfx_1_1isf__input__port__vis.html",
"structvst3_1_1_window_container.html#a4cac1f467fac8917be04de0fca4c426e"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';