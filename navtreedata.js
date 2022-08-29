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
"_c_s_p_coherency_checker_interface_8hpp_source.html",
"_event_component_8hpp_source.html",
"_mapper_device_8hpp_source.html",
"_q_graphics_combo_8hpp_source.html",
"_string_factory_key_8hpp_source.html",
"class_audio_1_1_settings_1_1_view.html#af6dc6bee3b47b3669f2014813dcc60e8",
"class_curve_1_1_command_object_base.html#aff951630a3e4d92a55273db757a9397b",
"class_curve_1_1_segment_model.html#a002c46c1c179062a8b363f1ecd22b965",
"class_data_stream_reader.html#a873a591df07b34718a3c4da4fe828ca0",
"class_dataflow_1_1_audio_address_dialog.html#ad5fe736eae1de5aed901549996906ec6",
"class_device_1_1_device_list.html#aaa817d0a9c58fd526e68795584fde5f9",
"class_execution_1_1_interval_component.html#a83f2fe81cfc353c944067847fceae225",
"class_explorer_1_1_address_item_model.html#acb0191e078854144fef669437bd2b6a8",
"class_explorer_1_1_listening_manager.html#a84dde4ab8734361e6de09c7668cc34a5",
"class_gfx_1_1_gfx_context.html#adc129ec9abaf149bb15ccc590eacc57c",
"class_gfx_1_1_video_1_1_presenter.html#a6b41159f1a6e0095d07c7682bc14105c",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_01std_1_1is__base__of_3_fa82f8e34463791cc3719bf96cdfa1aa.html#a4e56927470794afd9c590cbd3095d487",
"class_j_s_o_n_reader.html",
"class_j_s_o_n_writer.html#a841d7898a38092eb384701be450524f2",
"class_local_tree_1_1_base_callback_wrapper.html",
"class_media_1_1_sound_1_1_process_model.html#a05624ecd9e5b9bf6c774840e94afd86b",
"class_mixer_1_1_audio_slider_widget.html#ad61f3f74d21131a68e2bade54ab2e81f",
"class_path.html#a99e688aedc6e75169c3c5a3f96aca69b",
"class_process_1_1_control_outlet.html#a6150752919a2572e5a35dd2edc693abd",
"class_process_1_1_layer_view.html#a857b97385b1b56eeb3a4e9d8f7d32f59",
"class_process_1_1_process_model.html#a51921b6c6fdc27c55d323003d34a2405",
"class_protocols_1_1_m_i_d_i_device.html#a43436cbd421864c6eaf91157a2cb7452",
"class_remote_control_1_1_document_plugin.html",
"class_scenario_1_1_command_1_1_add_slot_to_rack.html#a863ec4791d3d804f4391bcfd2f01a808",
"class_scenario_1_1_command_1_1_merge_events.html#a9f751bf73f532432e3a18d3e1aa308c7",
"class_scenario_1_1_command_1_1_set_time_signatures.html#a31bdd1c69117fe48b1a208608358d763",
"class_scenario_1_1_drop_scenario.html",
"class_scenario_1_1_interval_component.html#ad66184322abefbe910889937c8232b42",
"class_scenario_1_1_interval_view.html#a52f691b9639d46c2bfe844b6856eece2",
"class_scenario_1_1_move_on_anything___transition.html#a1ef3f068711ee967e63b8a74dd563cc5",
"class_scenario_1_1_scenario_document_presenter.html#a4e15243665424ab89e4c4f6b245f369d",
"class_scenario_1_1_slot_drag_overlay.html",
"class_scenario_1_1_time_signature_handle.html#a43550249dd7f25ecd0ba3e469b06b308",
"class_single_section_memory_manager.html",
"class_state_1_1_vec_widget.html",
"class_uuid_key.html#ad2ec58d920c071728ba2ddcc17520eaa",
"classoscr_1_1_custom_text_graphics_knob.html#ad0e5b9ba41fc7ae8c3c742a3ec5f33ce",
"classscore_1_1_command_stack.html#acdba23171ccd21b6035cec9b6de3bfdf",
"classscore_1_1_entity_map.html",
"classscore_1_1_int_slider.html#a98d691febe3e57dc663909e9ce52614b",
"classscore_1_1_q_graphics_button.html#afe841377ffed189490e776b50ab139a6",
"classscore_1_1_q_graphics_toggle.html#af4a74acd45260804dd5ea0e57e949f57",
"classscore_1_1_skin.html#a9b715f3faf461a2666b3d4314db89333",
"classscore_1_1gfx_1_1_generic_node_renderer.html#a8dc3ed3a16f84658560fd15a0605893d",
"classscore__plugin__library.html",
"classvst_1_1_application_plugin.html#a0e68b42dd42257c7b75698703be19fe5",
"plugins_2score-plugin-protocols_2_protocols_2_settings_2_presenter_8hpp_source.html",
"struct_analysis_1_1_peak.html",
"struct_control_1_1_int_spin_box.html#aa3bde129e38e468d628dc151e4ea3b0f",
"struct_dataflow_1_1_value_outlet_factory.html#a3ba618cd0025ac91aca151d0cadd4fd9",
"struct_execution_1_1_setup_context.html#a9b063a706736b5ac963f33ce4fbb22e5",
"struct_gfx_1_1_video_1_1_presenter_1_1_port.html",
"struct_l_v2_1_1_global_context.html#abeba70127d767422b3e7cf2df82d4295",
"struct_media_1_1_frame_computer.html#a4bb4fcc22249eb342dcff68282f74075",
"struct_nodes_1_1_arpeggiator_1_1_node.html#ad4dce0e25db95343157ffaf4a86e0507",
"struct_nodes_1_1_pulse_to_note_1_1_node_1_1val__visitor.html",
"struct_process_1_1_impulse_button.html#abc0820cfaad46c4b565091a5f3f00d38",
"struct_process_1_1_x_y_slider.html#a288f5215de52ee46e7ad8daaec4d2489",
"struct_q_meta_type_id_3_01_scenario_1_1_process_model_01_5_01_4.html",
"struct_scenario_1_1_address_accessor_curve_creator.html#a6cfcd5b43fd2798f0ef74496298d2f15",
"struct_scenario_1_1_request_overlay_menu_callback.html",
"struct_state_1_1_destination_qualifiers.html#a7a8fd5be625d3d07bacf4beff33c97c7",
"struct_time_val.html#a4e45184dc33ce58a34e17d6170b0c515",
"structoscr_1_1_custom_item_1_1custom__mouse__event.html#af343999edb57148976ca7bef2d626eb2a09e8c34149a6b2c69cd3c55d6f5265e1",
"structscore_1_1_application_context.html#a2a667b5e7d6d1d55e8c602000db26fb3",
"structscore_1_1_hierarchical_member.html#a58395ed394a8009e45cbc032e751e920",
"structscore_1_1_string_constants.html#a94ec28066db633d8f8e33b3bc961c887",
"structscore_1_1gfx_1_1_mesh.html#ae6e8d1d92a37bc98af5bf7c748865d2b",
"structscore_1_1gfx_1_1image.html",
"structvst3_1_1_vst3_data_stream.html#abbde813fd54c2cb424b05471af21f8a7"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';