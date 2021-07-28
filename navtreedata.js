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
"class_pd_1_1_process_model.html",
"class_process_1_1_footer_delegate.html#a136e291d11c1f67a45cd4772b32c7ec0",
"class_process_1_1_port.html#a2fddc1c66f08d35d407e56fee5214a6c",
"class_protocols_1_1_fixture_data.html#a44b201e003315675ec485b4937924c29",
"class_recording_1_1_automation_recorder.html#aa38d48187370778eb89942377102df2c",
"class_scenario_1_1_command_1_1_add_state_with_data.html",
"class_scenario_1_1_command_1_1_move_event_list.html#ac3882469e52f2df6b7907b7c0bcdff69",
"class_scenario_1_1_constrained_displacement_policy.html",
"class_scenario_1_1_event_summary_widget.html#a5fbb96c738a119cc46b6f1ea0c11c51d",
"class_scenario_1_1_interval_model.html#a80819763a390e917f31fb1950b74fcc6",
"class_scenario_1_1_line_text_item.html#aa77609271f6d81ea0a321d2b04b75d6a",
"class_scenario_1_1_process_model.html#a89b5a0a24ca01f436413cc326cb8f250",
"class_scenario_1_1_scenario_temporal_layer_factory.html#ab6234c06b6013e3e82e5730221ba7753",
"class_scenario_1_1_state_view.html#aebda3553a0d4bbc6e642e6fb24920ea4",
"class_scenario_1_1_transition___t_3_01_scenario___t_00_01_move_on_state_01_4.html#aa12e2f33bec6c08ad0ecd1e093e3ddcb",
"class_spline_1_1_recreate_on_play_1_1_component.html#ad7a0258bc8ce807d609ed98998d05483",
"class_tree_node.html#a4d117c7d3596fb8d397b9838aa59d97c",
"class_writer.html",
"classscore_1_1_command_stack.html#af4c3f99f095feeec42d60635b91df1dc",
"classscore_1_1_file_downloader.html",
"classscore_1_1_messages_panel_delegate_factory.html",
"classscore_1_1_q_graphics_multi_slider.html#a0a3b740fdd6883fefbefdd9401896b37",
"classscore_1_1_skin.html#a535427f749a529f9532338349cba6a3d",
"classscore_1_1gfx_1_1_generic_node_renderer.html#a21a76fdd9bf9f2e8577021f962a33924",
"classscore__plugin__ui.html#a8cbe2242e49cfc0de3155d90d1ec73a4",
"classvst_1_1_model.html#adbd71f4715f62f77642c87918594504c",
"score-plugin-jit_2_benchmarks_2_gain_8hpp_source.html",
"struct_control_1_1_float_control.html#a3abe40c464f05390a03b7fb590e443b7",
"struct_curve_1_1_style.html#ad92fe1669dfadf91724dce3293786128",
"struct_execution_1_1_settings_1_1_merging_policies.html#abbfddb72b9a671d05426003f807d640e",
"struct_gfx_1_1con__unvalidated.html#aafb77818572030deca1c6925b4a94da5",
"struct_l_v2_1_1_host_context.html#a156a28a6674d36d1e5346fe8d48d3775",
"struct_media_1_1_sound_1_1_waveform_computer_impl.html#a6bddae0e109eb92e1f3f45eba1623a3b",
"struct_nodes_1_1_factor_oracle_1_1_node_1_1_state.html",
"struct_process_1_1_combo_box.html#ad8f07b949a22eadfa212244b2b3be17a",
"struct_process_1_1_style.html#ad2f78e0b22290dc97144f5e338840716",
"struct_q_meta_type_id_3_01_selection_01_4.html#acec6255fb4f4b7cae72bfbd0579f4ecda06b84b3a2159e2027e89fba1ed829db1",
"struct_scenario_1_1_categorized_address.html#a08bc4e57a508c524e74b38ad20a74008",
"struct_scenario_1_1_slot.html#ac012744b2d36e07463882fd1b3d9e3d5",
"struct_state_1_1_unit_model_1_1_tree_node.html#a7d645743d37e44a51969cdefbdfc6ec9",
"struct_variant_data_stream_serializer.html#a69b84a1df54ad37fcb8e52ab24dea5ec",
"structscore_1_1_brush_set.html#a4e11f1014705762efaf9e5447fb2ee5f",
"structscore_1_1_polymorphic_component_hierarchy_manager_1_1_child_pair.html#ad571a5e92b8dc556563a2e49dcae6999",
"structscore_1_1_value_double_slider.html",
"structscore_1_1gfx_1_1_text_node.html",
"structvst3_1_1_bus_activation_visitor.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';