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
"_clear_interval_8hpp_source.html",
"_factory_family___qt_interface_8hpp_source.html",
"_minuit_device_8hpp_source.html",
"_scenario_actions_8hpp_source.html",
"_variant_serialization_8hpp_source.html",
"class_automation_1_1_process_state.html#ad20a53e5113aa683d5f42b1be9e31a17",
"class_curve_1_1_edition_settings.html#a16aaf4ee20b7eb6de78e364c775fe4a7",
"class_curve_1_1_settings_1_1_view.html#a9377870582ff235958cf40b87b9f7629",
"class_data_stream_writer.html#a1fa8a02ca5a0269e0a5cd4baee80cfef",
"class_dataflow_1_1_port_item.html#a3b22c3dee682aeaa0a3051fae031c86b",
"class_execution_1_1_clock.html#a2b18b30f289e9a23b0f112f314790213",
"class_execution_1_1_state_component_base.html#a5e893dcec3666158222f14faf7653ede",
"class_explorer_1_1_device_explorer_filter_proxy_model.html",
"class_faust_d_s_p_1_1_executor_1_1exec__node.html",
"class_gfx_1_1_video_1_1_process_executor_component.html",
"class_identified_object.html#a00a1eeee55ff8c33973af3ccc3d214b9",
"class_j_s_o_n_reader.html#a3d23c52535fc088b411e5d1de2e485cf",
"class_j_s_o_n_writer.html#acb741c3c7c52c5bf042104c9560df783",
"class_mapping_1_1_inspector_widget.html#ae46e40e0b81deac4ae73f9d253adda3e",
"class_metronome_1_1_process_model.html#acb96daf1117dad561c90971378f0b05c",
"class_nodal_1_1_model.html#a5eb1d01cc273cb8c99659a8cf684e210",
"class_pd_1_1_process_model.html#a03c16fd7fee082f1e6d6fa0f727b2852",
"class_process_1_1_footer_delegate.html#a173e4338e6be89b47a95c06886758b2d",
"class_process_1_1_port.html#a383dd0c2a5619fbdf4713d4767c3efbe",
"class_protocols_1_1_fixture_data.html#aafcffec2c9d02b49a488ae1df8ad0ee6",
"class_recording_1_1_automation_recorder.html#abaf11ef227fc53b3f9be0d75bbdd520f",
"class_scenario_1_1_command_1_1_add_trigger.html#a291d45d1cb63efed306fdf6b9abe01f6",
"class_scenario_1_1_command_1_1_move_event_meta.html#a3cc62bab6466c82e5ffa0fccbfa1cf87",
"class_scenario_1_1_control_item_model.html#a5d2cae3e490f343784adc1d661fc7d33",
"class_scenario_1_1_event_summary_widget.html#ac48bb28af8ee491a6fe0a16276f501b2",
"class_scenario_1_1_interval_model.html#a862847fe28aff128eac85382d88683aa",
"class_scenario_1_1_line_text_item.html#afcb5d8df03b52b3b65044d84e0e77b5b",
"class_scenario_1_1_process_model.html#a8eec91ed81faf09cf137a1bf2996ad30",
"class_scenario_1_1_scenario_validity_checker.html",
"class_scenario_1_1_state_view.html#af4c1b8999b888f18bf14b3c8d0ec3d86",
"class_scenario_1_1_transition___t_3_01_scenario___t_00_01_move_on_time_sync_01_4.html#a6db6a3dcbc16d32fc74d5028432ff5f8",
"class_spline_1_1_view.html#a141f653fdd10504d54fdb2bc0aa70b08",
"class_tree_node.html#a6d9c34929de6f4fe2a77d384be30306b",
"class_zeroconf_browser.html#a0969c36d695e27d9b00db4aa57eb63f1",
"classscore_1_1_command_stack.html#af5ecb64c4fc99ee73b772cc415f4a4d7",
"classscore_1_1_file_downloader.html#ac1b31099d07d676e9bd5e629075dd91d",
"classscore_1_1_minimal_application.html#a2bfcb53d6558fa3129c013e9b1c86676",
"classscore_1_1_q_graphics_multi_slider.html#a295883d6c99a8a03676c0558e9ef49e3",
"classscore_1_1_skin.html#a58bf0e41d6e39bb00074c45f949828c0",
"classscore_1_1gfx_1_1_generic_node_renderer.html#a5712f74739f5cdea3227cac749018c86",
"classscore__plugin__vst.html#ad4b80b5e70c2901627f844f79ed7de7c",
"classvst_1_1_remove_control.html",
"score-plugin-lv2_2_l_v2_2_application_plugin_8hpp_source.html",
"struct_control_1_1_float_control.html#a8eab4d4cfe28d441cb1ebd78d9a28365",
"struct_curve_1_1_tool_palette___t.html",
"struct_execution_1_1_settings_1_1_ordering_policies.html#aa78f827d0efc4eb167f4f307e2f9e4be",
"struct_gfx_1_1control__updater.html#aa747e9e19507aa54d17b22581ac1db3c",
"struct_l_v2_1_1_host_context.html#a41566a0988560a92a4c493511e447eaf",
"struct_media_1_1_sound_1_1_waveform_computer_impl.html#ab57285745f49c59fbe8aabb62ce24031",
"struct_nodes_1_1_factor_oracle_1_1safe__vector.html#a2fe39fe64ad8627aac4ec7eff9a46fcf",
"struct_process_1_1_context.html#ab99ea45db27659fdfdca64907fe75931",
"struct_process_1_1_style.html#ae47baebf9b82cf6aea4a5d84ea5e99f6",
"struct_q_meta_type_id_3_01_state_1_1_destination_qualifiers_01_4.html#a53d8b5d78bec8152250983f82b59d783a241d1f60b5ef7352fc4595620f5d41a0",
"struct_scenario_1_1_categorized_address.html#a46ef96b6b74f3be973dd140cdb0e3e9f",
"struct_scenario_1_1_slot_id.html#a25dc68376002b7f0a7931d4ed77a4175",
"struct_state_1_1_vec_edit_base.html#abae609e31ac61d56889b752f3ce961ed",
"struct_variant_j_s_o_n_deserializer.html#a86c20c48bc37e721bbbb72d6c6381b20",
"structscore_1_1_brush_set.html#a9c54ebb933714672a209cb0c641e8d8e",
"structscore_1_1_positioned_event_3_01_scenario_1_1_point_01_4.html#a04e63bf3e5cb1cc42980f0b0f5fd275d",
"structscore_1_1_value_assigner_3_01int_01_4.html#a476b59674079f702fdc748096970fbe2",
"structscore_1_1gfx_1_1_texgen_node_1_1ubo.html",
"structvst3_1_1_available_plugin.html#a013f3b04472422d2842b360373d49de6"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';